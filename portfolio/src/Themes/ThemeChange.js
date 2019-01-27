import $ from "jquery";

var Themes = {
    Duplicate: ["Menu"],
    Menu: {"--navIcons": "#fafafa"},
    Home: { "--navIcons": "#fafafa","--MouseR":"var(--MWinvertR)", "--MouseL": "var(--MWinvertL)"},
    Project1: { "--navIcons": "black", "--MouseR":"var(--MBinvertR)", "--MouseL": "var(--MBinvertL)"},
    Project2: { "--navIcons": "black", "--MouseR": "var(--MBinvertR)", "--MouseL": "var(--MBinvertL)" },
    Project3: { "--navIcons": "#fafafa" },
    Project4: { "--navIcons": "black", "--MouseR":"var(--MBinvertR)", "--MouseL": "var(--MBinvertL)"},
    Project5: { "--navIcons": "black", "--MouseR":"var(--MBinvertR)", "--MouseL": "var(--MBinvertL)"},
    Project6: { "--navIcons": "black", "--MouseR":"var(--MBinvertR)", "--MouseL": "var(--MBinvertL)"},
    Project7: { "--navIcons": "black", "--MouseR":"var(--MBinvertR)", "--MouseL": "var(--MBinvertL)"},
    Contacts: { "--navIcons": "#fafafa" }
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