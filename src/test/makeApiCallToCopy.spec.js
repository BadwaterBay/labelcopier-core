import { expect } from 'chai';

import { makeApiCallToCopy } from '../core/apiCalls';
import { dummyResponseBodyAll } from './dummyData/dummyResponseBodyOfListingLabels.setup.test';
import {
  mockHttpServerSetup,
  mockHttpServerCleanup,
  mockHttpServerForListingOnSuccess,
} from './mockHttpServer';

describe('Test makeApiCallToCopy', function () {
  describe('with a mock HTTP server', function () {
    before(function () {
      mockHttpServerSetup();
    });

    after(function () {
      mockHttpServerCleanup();
    });

    describe('with HTTP responses on success', function () {
      beforeEach(function () {
        mockHttpServerForListingOnSuccess();
      });

      describe("the return value with argument 'labels'", function () {
        const entryType = 'labels';
        const responseBodyAnswerKey = dummyResponseBodyAll;
        let responseBody;

        beforeEach(async function () {
          responseBody = await makeApiCallToCopy(entryType);
        });

        it('should be an array', function () {
          expect(responseBody).to.be.an('array');
        });

        it('should matches the expected value', function () {
          expect(responseBody).to.deep.equal(responseBodyAnswerKey);
        });
      });
    });
  });
});