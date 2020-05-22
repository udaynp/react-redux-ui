import React, { useEffect, useState } from 'react';
//under the router
import { Switch, Route } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { PageLayout } from '../blocks/PageLayout';
import { PageHeader } from '../blocks/PageHeader';
import { PageFooter } from '../blocks/PageFooter';
import { Content } from '../blocks/Content';
import { UserBadge } from '../blocks/UserBadge';
import { AuthModal } from '../blocks/AuthModal';
import { MainPage } from './pages/MainPage';

import { VotePageContainer } from './containers/VotePageContainer';
import { ElectionPageContainer } from './containers/ElectionPageContainer';
import { ElectionFormContainer } from './containers/ElectionFormContainer';
import { VoterPageContainer } from './containers/VoterPageContainer';

// whole display page directs to index.js

import { getVotes, authUser } from '../actions/voteActions';
import { getVoters } from '../actions/voterActions';

import navigationConstants from './pages/navigationConstants.json';

export const App = () => {
  const authedUser = useSelector((state) => state.authUser);
  const voters = useSelector((state) => state.voters);
  const dispatchProps = bindActionCreators(
    {
      onAuthUser: authUser,
      onGetVoters: getVoters,
      onGetVotes: getVotes,
    },
    useDispatch()
  );

  const [shoudShowAuthModal, setShow] = useState(false);
  const onSetShowModal = (shouldShow) => {
    setShow(shouldShow);
  };

  useEffect(() => {
    dispatchProps.onGetVoters();
    dispatchProps.onGetVotes();
    //eslint-disable-next-line
  }, []);

  const userBadge = (
    <UserBadge
      activeUser={authedUser}
      onSignOut={() => dispatchProps.onAuthUser(null)}
      onClick={() => onSetShowModal(true)}
    />
  );

  return (
    <PageLayout>
      <PageHeader badge={userBadge} />
      <Content>
        <AuthModal
          show={shoudShowAuthModal}
          onHide={() => onSetShowModal(false)}
          onSignIn={(email) => dispatchProps.onAuthUser(email, voters)}
        />
        <Switch>
          <Route path='/' exact>
            <MainPage />
          </Route>
          <Route path={navigationConstants[0].url}>
            <VoterPageContainer />
          </Route>
          <Route path={navigationConstants[1].url}>
            <VotePageContainer />
          </Route>
          <Route path={navigationConstants[2].url}>
            <ElectionFormContainer />
          </Route>
          <Route path={navigationConstants[3].url}>
            <ElectionPageContainer />
          </Route>
        </Switch>
      </Content>
      <PageFooter />
    </PageLayout>
  );
};
