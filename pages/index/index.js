Page( {
  data: {
    addTodoText: "",
    showInput: false,
    diaryActive: "",
    mealsActive: "",
    todoActive: "",
    notesActive: "",
    shopActive: "",
    toDos: [
      {
        text: "Something to do",
        selected: ""
      },
      {
        text: "Something to do 2",
        selected: "radioInner"
      },
      {
        text: "Something to do 3",
        selected: "radioInner"
      },


    ]
  },
  onLoad ( query )
  {
    // 页面加载
    console.info( `Page onLoad with query: ${ JSON.stringify( query ) }` );


  },
  onItemInput ( event )
  {
    this.setData( {
      addTodoText: event.detail.value
    } )
    console.log( event )

  },
  addTodo ( event )
  {
    this.setData( {
      showInput: true
    } )

  },
  addNow ()
  {
    this.data.toDos.push( {
      text: this.data.addTodoText,
      selected: ""
    } )

    this.setData( {
      toDos: this.data.toDos,
      showInput: false

    } )
  },
  onReady ()
  {
    // 页面加载完成
  },
  onShow ()
  {
    // 页面显示
  },
  onHide ()
  {
    // 页面隐藏
  },
  onUnload ()
  {
    // 页面被关闭
  },
  onTitleClick ()
  {
    // 标题被点击
  },
  onPullDownRefresh ()
  {
    // 页面被下拉
  },
  setSelected ( event )
  {
    if ( ( this.data.toDos[ event.currentTarget.id ].selected ) === "" )
    {
      this.data.toDos[ event.currentTarget.id ].selected = "radioInner"

      this.setData( {
        toDos: this.data.toDos
      } )
    }
    else
    {
      this.data.toDos[ event.currentTarget.id ].selected = ""
      this.setData( {
        toDos: this.data.toDos
      } )
    }


    console.log( this.data.toDos[ event.currentTarget.id ].selected )
  },
  onReachBottom ()
  {
    // 页面被拉到底部
  },
  onClick ( event )
  {

    console.log( event )
  },
  onShareAppMessage ()
  {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
} );
