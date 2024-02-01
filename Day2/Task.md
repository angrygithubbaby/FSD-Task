Document and windows Objects

The window object represents a window/tab containing a DOM document where as document object is property of window object that points to the DOM document loaded in that window. You can access a document object either using window.

Document:

Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Using document object, JavaScript can modify, add and delete the HTML elements.

Definition:

The document object represents the HTML document in a web page.
It serves as an interface to interact with the content and structure of the document.

Scope:

The document object is specific to the current HTML document loaded in the browser.
It provides methods and properties to access and manipulate the elements within that document.

Manipulating Content:

Developers use the document object to access and modify HTML elements, update their attribute

Windows Objects:

Definition:

The window object represents the browser window or a frame.
It is the global object in client-side JavaScript and serves as the top-level scope for variables and functions.

Scope:

The window object is global and accessible throughout the entire JavaScript application.
It encapsulates not only the current HTML document (document object) but also other objects and properties related to the browser environment.

Managing Windows and Frames:

The window object provides methods to open, close, and manipulate browser windows or frames.