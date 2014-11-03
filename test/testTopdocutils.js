/**
 *
 * Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

"use strict";

var TopdocUtils = require('../topdoc-utils');

describe('TopdocUtils', function() {
  it('slugifies', function() {
    var title = "This is a title";
    var expectedSlug = "this-is-a-title";
    TopdocUtils.slugify(title).should.equal(expectedSlug);
  });
  it('titlifies', function() {
    var slug = "yo-dawg-i-am-a-slug";
    var expectedTitle = "Yo Dawg I Am A Slug";
    TopdocUtils.titlify(slug).should.equal(expectedTitle);
  });
});
