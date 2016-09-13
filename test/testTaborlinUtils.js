import test from 'ava';
import utils from '../src/';

test('slugifies', t => {
  const title = 'This is a title';
  const expectedSlug = 'this-is-a-title';
  t.is(utils.slugify(title), expectedSlug);
});

test('titlifies', t => {
  const slug = 'yo-dawg-i-am-a-slug';
  const expectedTitle = 'Yo Dawg I Am A Slug';
  t.is(utils.titlify(slug), expectedTitle);
});

test('titlifies with file extension', t => {
  const slug = 'this-is-a-button.css';
  const expectedTitle = 'This Is A Button';
  t.is(utils.titlify(slug), expectedTitle);
});
