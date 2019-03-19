import $ from "jquery";

var Themes = {
    Menu: { "--navIcons": "#fafafa","--Logo": "var(--LogoW)"},
    Home: { "--navIcons": "#fafafa","--MouseR":"var(--MWinvertR)", "--MouseL": "var(--MWinvertL)", "--Logo":"var(--LogoW)"},
    Project1: { "--navIcons": "black", "--MouseR": "var(--MBinvertR)", "--MouseL": "var(--MBinvertL)", "--Logo": "var(--LogoB)"},
    Project2: { "--navIcons": "black", "--MouseR": "var(--MBinvertR)", "--MouseL": "var(--MBinvertL)", "--Logo": "var(--LogoB)" },
    Project3: { "--navIcons": "black", "--MouseR": "var(--MBinvertR)", "--MouseL": "var(--MBinvertL)", "--Logo": "var(--LogoB)"},
    Project4: { "--navIcons": "#fafafa", "--MouseR": "var(--MWinvertR)", "--MouseL": "var(--MWinvertL)", "--Logo": "var(--LogoW)"},
    Project5: { "--navIcons": "#fafafa", "--MouseR": "var(--MBinvertR)", "--MouseL": "var(--MBinvertL)", "--Logo": "var(--LogoW)"},
    Project6: { "--navIcons": "black", "--MouseR": "var(--MBinvertR)", "--MouseL": "var(--MBinvertL)", "--Logo": "var(--LogoB)"},
    Contacts: { "--navIcons": "#fafafa","--MouseR": "var(--MWinvertR) ", "--MouseL": "var(--MWinvertL)", "--Logo": "var(--LogoW)"},
    Read: { "--navIcons": "black","--Logo": "var(--LogoB)" }
}


export function ThemeChange(pageAction) {
    // console.log(Themes);

    if (Themes[pageAction]) {
        if (["Menu", "Read"].includes(pageAction)) {
            $.each(Themes[pageAction], function (key, value) {
                Themes[`${pageAction}Rm`] = { ...Themes[`${pageAction}Rm`], [key]: $("html").css(key)};
            });
        }

        $("html").css(Themes[pageAction]);

    }else{
        console.log("This is not referenced in theme componet");
    }
}