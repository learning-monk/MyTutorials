## Let's explore fetch() method in JavaScript

`fetch()` method asynchronously fetch resources across the network.

_What is the difference between **Synchronous** vs **asynchronous** programming?_

In synchronous programming, actions happen one at a time. That is, a function which is called upon only returns the result when the action is finished. Whereas, in asynchronous programming,
multiple actions happen at the same time which means, the program that initiated the action continues running, and the action happens alongside it, notifying the program when it is completed.

More details about fetch() can be found here:

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

- `fetch()` takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object)
