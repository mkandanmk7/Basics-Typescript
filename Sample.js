let channelObj = {
  title: "CyberDude",
  video_title: "this_keyword",
  languages: ["tamil", "english", "telugu"],

  cat: function () {
    console.log(this);
    this.languages.map(function (lang) {
      console.log(this);
      console.log(this.video_title + " in " + lang);
    }, this);
    console.log();
  },
};
"channelObj", channelObj.cat();
// this_keyword in tamil
