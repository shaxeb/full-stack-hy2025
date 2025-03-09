# part0-fullstack
part 0 submission of full stack open course

```mermaid
---
    title: Adding a new note
---
sequenceDiagram
Form->>Browser: SUBMIT NEW NOTE FORM
activate Browser
Browser-->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
deactivate Browser

loop Add Note
    Server->>Server: Extracts new note data, makes a new note and adds to notes list
end

activate Server
Server-->>Browser: Response code 302, REDIRECT /notes
deactivate Server
```
