Vue.createApp({
  data() {
    return {       
      article: null, //variabel article
    };
  },
  methods: {
    getMarkdownData()
    {               
      var converter = new showdown.Converter(); //mendefinisikan konverter
      axios
        .get(
          "https://raw.githubusercontent.com/tikawidi/md/APB3/article_1.md"
        )
        .then((res) => {           
          var html = converter.makeHtml(res.data); //eksekusi konverter
          this.article = html; //update variabel article
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getMarkdownData()
  },
}).mount("#app");
