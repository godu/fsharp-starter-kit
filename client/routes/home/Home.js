/**
 * F# Starter Kit (https://github.com/kriasoft/fsharp-starter-kit)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Layout } from '../../components'

const link = "https://github.com/kriasoft/fsharp-starter-kit";

function Home() {
  return (
    <Layout>
      <h1>Welcome to F# Starter Kit!</h1>
      <p>
        For more information visit <a href={link}>{link}</a>
      </p>
    </Layout>
  );
}

export default Home;
