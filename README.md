# geeksForGeeksStats API - GFG Updated UI

The **geeksForGeeksStats API** provides dynamically generated GeeksForGeeks stats that you can showcase on your GitHub profile or any website. It offers details on the total number of problems solved on [GeeksForGeeks](https://practice.geeksforgeeks.org/).

## Preview

![Screenshot 2021-12-24 203043](https://user-images.githubusercontent.com/88178000/147360853-1c573480-399f-4e68-9112-b07e13852100.jpg)

## How to Use

To display your stats in markdown (GitHub profile), copy the code below and replace `<YOUR_USERNAME>` with your GeeksForGeeks username. If your username contains spaces, replace them with `%20`. For example, if your GeeksForGeeks username is "narendra dewasi," replace `<YOUR_USERNAME>` with `narendra%20dewasi`.

```
https://gfgstats.aryanamish.in/?userName=<GFG_USERNAME>
```

If you want json response you can use `&json` parameter to the get request

```
https://gfgstats.aryanamish.in/?userName=<GFG_USERNAME>&json
```

To show the SVG on you Readme files you can use

```markdown
[![Aryan's geeksForGeeks stats](https://gfgstats.aryanamish.in/?userName=<GFG_USERNAME>)](https://github.com/Aryanamish/geeksForGeeksStatsAPI)
```

## API END POINT

`https://gfgstats.aryanamish.in`

## Any contribution to this repo is highly appreciated

<br>
inspired by https://github.com/napiyo/geeksForGeeksStatsAPI/

<br>
<br>
<div id="badges">
  <a href="https://www.linkedin.com/in/aryan-amish/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <!-- <a href="https://discordapp.com/users/1080203547276230719">
    <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Badge"/>
  </a> -->
  <a target="_blank" href="mailto:aryanamish385@gmail.com">
    <img src = "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Mail Badge">
  </a>
  <a target="_blank" href="https://twitter.com/aryanamish1">
    <img src = "https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge">
  </a>
</div>
