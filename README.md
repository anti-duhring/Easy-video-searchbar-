# Easy video searchbar
An easy video searchbar for embed youtube videos on your page.

# Funcionality

![Big-Board-Draft-Cougars (1)](https://user-images.githubusercontent.com/99638905/157781178-85227f35-1351-4f37-aa8c-044ebccf22df.png)

# Implementation

The `ref` attribute is the `v` param of your youtube link.

Ex: `https://www.youtube.com/watch?v=aliTdPAupxs`

```json
{"prospectos": [
  {"name":"Evan Neal",
  "position":"OT",
  "college": "Alabama",
  "grade": 5,
  "tape":
    [{"name":"Evan Neal vs Notre Dame 2020 (Rose Bowl)",
      "author":"João Basso",
      "ref":"aliTdPAupxs"},
      {"name":"(SEC CCG) Alabama OL/Offense vs Georgia Defense (2021)",
        "author":"DoABarrowRoll",
        "ref":"A2nBXSPFRE4"},
      {"name":"Alabama Offensive Tackle Evan Neal Official Sophomore Year Highlights",
        "author":"917 Productions",
        "ref":"ahhmcssR3lY"}]
      }
]}
```
The code will add up a new embed video for each object inside the `tape` attribute.

```javascript
              if(user.name.toLowerCase().indexOf(nameSearch.toLowerCase())!=-1){
                user.tape.forEach((element, index, array) => {

                  tapeGrid.innerHTML += '<div class="card-tape"><div class="frame-content"><iframe class="tape-frame" src="https://www.youtube.com/embed/'+element.ref+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="frameInfo-content"><p class="name">'+element.name+'</p><p class="author">Postado por: <span class="author-name">'+element.author+'</span></p></div></div>';
                })
              }
 ```

# Achitecture
- HTML, CSS
- Javascript
- Json
