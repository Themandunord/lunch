/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import LayoutContainer from '../../../components/Layout/LayoutContainer';
import renderIfLoggedOut from '../../helpers/renderIfLoggedOut';
import Login from './Login';

export default {

  path: '/login',

  action(context) {
    const state = context.store.getState();

    return renderIfLoggedOut(state, () => ({
      component: (
        <LayoutContainer path={context.url}>
          <Login />
        </LayoutContainer>
      ),
    }));
  },
};
