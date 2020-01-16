/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import getWatermarks from '../get_watermarks';

describe('getWatermarks', () => {
  test(`that watermarks use thresholds as upper target`, () => {
    const watermarks = getWatermarks({
      coverageThreshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    });

    expect(watermarks).toEqual({
      branches: [expect.any(Number), 100],
      functions: [expect.any(Number), 100],
      lines: [expect.any(Number), 100],
      statements: [expect.any(Number), 100],
    });
  });

  test(`that watermars are created always created`, () => {
    const watermarks = getWatermarks({});

    expect(watermarks).toEqual({
      branches: [expect.any(Number), expect.any(Number)],
      functions: [expect.any(Number), expect.any(Number)],
      lines: [expect.any(Number), expect.any(Number)],
      statements: [expect.any(Number), expect.any(Number)],
    });
  });
});