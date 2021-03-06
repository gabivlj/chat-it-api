import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/home';
import Login from '../pages/login';
import { isLogged } from '../queries/types/isLogged';
import { useMutation } from '@apollo/react-hooks';
import { LOG_USER_LOCAL } from '../queries/user_queries';
import Profile from '../pages/profile';
import Post from '../pages/post';
import Navbar from './navbar';
import Register from '../pages/register';

type Props = {
  loged: isLogged | undefined;
  loading: Boolean;
};

export default function Routes({ loading, loged }: Props) {
  const [logUser] = useMutation(LOG_USER_LOCAL, {
    variables: { user: loged ? loged.loged.user : null },
  });
  useEffect(() => {
    logUser();
  }, [loading]);
  return (
    <>
      <Navbar />
      <Switch>
        {loading ? (
          <></>
        ) : (
          <>
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/user/:username" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/" component={Home} />
          </>
        )}
      </Switch>
    </>
  );
}
