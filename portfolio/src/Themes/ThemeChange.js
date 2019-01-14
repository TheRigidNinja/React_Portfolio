import $ from "jquery";

var Themes = {
  Menu: { Style: { "--navIcons": "#fafafa"},Action:"Toggle"},
    Home: { "--navIcons": "#fafafa","--MouseR":"var(--MWinvertR)", "--MouseL": "var(--MWinvertL)"},
    Project1: { "--navIcons": "black", "--MouseR":"var(--MBinvertR)", "--MouseL": "var(--MBinvertL)"},
    Project2: { "--navIcons": "#fafafa" },
    Project3: { "--navIcons": "#fafafa" },
    Project4: { "--navIcons": "#fafafa" },
    Project5: { "--navIcons": "#fafafa" },
    Project6: { "--navIcons": "#fafafa" },
    Project7: { "--navIcons": "#fafafa" },
    Project8: { "--navIcons": "#fafafa" },
    Aboutme: { "--navIcons": "#fafafa" }
}


export function ThemeChange(pageAction) {

  
    if (Themes[pageAction]) {
      if (Themes[pageAction]["Action"]) {
        if (pageAction.includes("Rm")) {
          $("body").css(Themes[pageAction]);
        } else {
          $.each(Themes[pageAction]["Style"], function(key, value) {
            Themes[`${pageAction}Rm`] = { [key]: $("body").css(key) };
          });
          $("body").css(Themes[pageAction]["Style"]);
        }

      }else{
        $("html").css(Themes[pageAction]);
      }
    }else{
        console.log("This is not referenced in theme componet");
    }
}