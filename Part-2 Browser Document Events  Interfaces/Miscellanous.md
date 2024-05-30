1. Event Loop

# The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

# The general algorithm of the engine:
While there are tasks:
    execute them, starting with the oldest task.
Sleep until a task appears, then go to 1.


# It may happen that a task comes while the engine is busy, then it’s enqueued.
# The tasks form a queue, the so-called “macrotask queue”.


2. Microtask queue

# Microtasks come solely from our code. They are usually created by promises: an execution of .then/catch/finally handler becomes a microtask. Microtasks are used “under the cover” of await as well, as it’s another form of promise handling.

# There’s also a special function queueMicrotask(func) that queues func for execution in the microtask queue.

# Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else.
