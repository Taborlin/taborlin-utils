/**
 *  default export
 */
export default {
  /**
   *  Public: turns strings into slug strings
   *
   *  * `title` Any {String} to turn into a slug.
   *
   *  ## Examples
   *
   *  ```js
   *  slugify('This is a title');
   *  //returns 'this-is-a-title'
   *  ```
   *
   *  Returns {String} slug.
   */
  slugify: (title) => {
    let slug = title.toLowerCase();
    const spaceRegex = /\s/g;
    slug = slug.replace(spaceRegex, '-');
    const nonWordRegex = /([^\w-]+)/;
    slug = slug.replace(nonWordRegex, '');
    return slug;
  },
  /**
   *  Public: turns strings into titles. (Title case-ish)
   *
   *  * `slug` Any {String} to turn into a title.
   *
   *  ## Examples
   *
   *  ```js
   *  titlify('this-is-a-button.css');
   *  //returns 'This Is A Button'
   *  ```
   *
   *  Returns {String} title.
   */
  titlify: (slug) => {
    let title = slug.replace(/-/g, ' ');
    if (title.indexOf('.css') === title.length - 4) {
      title = title.replace('.css', '');
    }
    title = title.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
    return title;
  },
};
