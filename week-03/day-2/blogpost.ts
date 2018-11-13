export { };

// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. 
// When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.


class BlogPost {
  title: string;
  authorName: string;
  publicationDate: string;
  text: string;
  

  constructor(title:string,authorName:string, publicationDate: string, text:string, ) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
}
let post= new BlogPost('"Lorem Ipsum"','titled by '+'John Doe', 'posted at '+'"2000.05.04."', 'Lorem ipsum dolor sit amet',  );
let post1= new BlogPost('"Wait but why"', 'titled by '+'Tim Urban', 'posted at '+'"2017.03.28."', 'A popular long-form, stick-figure-illustrated blog about almost everything.', );
let post2 = new BlogPost ('','','','Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention.When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.');

console.log (post);
console.log (post1);
console.log (post2);