Component( {
  mixins: [],
  data: {
    diaryActive: "",
    mealsActive: "",
    todoActive: "footerBtnActive",
    notesActive: "",
    shopActive: "",
  },
  props: {
    onClick: ( event ) => { },
  },
  didMount () { },
  didUpdate () { },
  didUnmount () { },
  methods: {
    buttonClick ( event )
    {
      console.log( event )
      if ( event.currentTarget.id === "1" )
      {
        this.setData( {
          diaryActive: "footerBtnActive",
          mealsActive: "",
          todoActive: "",
          notesActive: "",
          shopActive: "",
        } )
        //navigate to various pages
      }
      if ( event.currentTarget.id === "2" )
      {
        this.setData( {
          diaryActive: "",
          mealsActive: "footerBtnActive",
          todoActive: "",
          notesActive: "",
          shopActive: "",
        } )
      }
      if ( event.currentTarget.id === "3" )
      {
        this.setData( {
          diaryActive: "",
          mealsActive: "",
          todoActive: "footerBtnActive",
          notesActive: "",
          shopActive: "",
        } )
      }
      if ( event.currentTarget.id === "4" )
      {
        this.setData( {
          diaryActive: "",
          mealsActive: "",
          todoActive: "",
          notesActive: "footerBtnActive",
          shopActive: "",
        } )
      }
      if ( event.currentTarget.id === "5" )
      {
        this.setData( {
          diaryActive: "",
          mealsActive: "",
          todoActive: "",
          notesActive: "",
          shopActive: "footerBtnActive",
        } )
      }

    },
    assignBtnClass ( btnToActivate )
    {
      this.setData( {

        btnToActivate: "footerBtnActive",

      } )
      this.props.onClick( event );

    }
  },
} );
