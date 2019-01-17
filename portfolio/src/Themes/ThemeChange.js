import $ from "jquery";

var Themes = {
    Duplicate: ["Menu"],
    Menu: {"--navIcons": "#fafafa"},
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
    // console.log(Themes, pageAction);
    
    if (Themes[pageAction]) {

        if (Themes["Duplicate"].includes(pageAction)) {
            $.each(Themes[pageAction], function (key, value) {
                Themes[`${pageAction}Rm`] = { [key]: $("html").css(key) };
            });
        }

        $("html").css(Themes[pageAction]);

    }else{
        console.log("This is not referenced in theme componet");
    }
}