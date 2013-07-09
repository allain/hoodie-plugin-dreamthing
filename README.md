This is a dream plugin for Hoodie
===================================

We tend to dream code before we actually implement it.
So that's what we do here.


The structure of a plugin
---------------------------

A plugin can extend a Hoodie App at 3 places:

1. Frontend API, e.g. `hoodie.dreamthing.make('something')`
2. A Worker, that can pick up background tasks, interacts with 3rd party apps, etc
3. Pocket, extends the ADMIN ui with a custom view

A Plugin can extend all of the three, or only one.
