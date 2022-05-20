Vue.createApp({
  data() {
    return {
      massage: "Hello vue !",
      hero: {
        title: "Abdurrahman Thariq Al Kindiy",
        description: "Mahasiswa Universitas Ahmad Dahlan",
      },
      about: {
        bd: "16 Maret 2001",
        ph: "+6282137738688",
        ct: "DI.Yogyakarta",
      },
      contact: {
          email: "Abdurrahman2000016035@webmail.uad.ac.id",
          call: "+6282137738688",
      },
      tabel_j: "Tabel Keterampilan",
      tabel_nama: ["NO.","Keterampilan", "Skill"],
      table: [
        {
          skill: "Adobe Illustrator",
          kemapuan: "Intermediatte"
        },
        {
          skill: "Microsotft Word",
          kemapuan: "Expert"
        },
        {
          skill: "Microsoft Excell",
          kemapuan: "Expert"
        },
        {
          skill: "Microsoft Power Point",
          kemapuan: "Expert"
        },
        {
          skill: "Python",
          kemapuan: "Intermediatte"
        },
        {
          skill: "HTML",
          kemapuan: "Intermediatte"
        },
      ],
      for_artikel: [],
      article: null,

    };
  },
  methods: {
    ambilArticle()
    {
      axios
        .get(
          src="../artikel/artikel.json"
          )
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.for_artikel = res.data; //memperbarui variabel article pada bagian data()
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    },
    ambilDataMarkdown()
    {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const artikel = urlParams.get('article');        
      var converter = new showdown.Converter();
      console.log(artikel);
      axios
        .get(
          src="../artikel/"+artikel
        )
        .then((res) => {
          var html = converter.makeHtml(res.data);           
          this.article = html;
          console.log(html);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  beforeMount() { 
    this.ambilArticle(),
    this.ambilDataMarkdown()
  },
}).mount("#app");
