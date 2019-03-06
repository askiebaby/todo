$(document).ready( function () {

  let todo = {
    tasks: {
      notFinish: [],
      finished: []
    },
    createTask: function () {
      let task ={
        msgBox: () => {
          return $('.msgBox')
        },
        input: () => {
          return $('.addInput')
        },
        submit: function(){
          return $('.task__submit')
        }
      }
      return task
    },
    listenCurrent: function () {
      let submitButton = this.createTask().submit()
      let todoInput = this.createTask().input()
      let msgBox = this.createTask().msgBox()

      submitButton.click( function () {
        let todoName = todoInput.val()
        if (todoName) {
          todo.getCurrentTask('notFinish', todoName)
        } else {
          msgBox.text('你沒輸入內容...!!!!')
        }
      })
    },
    getCurrentTask: function (status, val) {
      let notFinish = this.tasks.notFinish
      let finished = this.tasks.finished
      let todoInput = this.createTask().input()
      let msgBox = this.createTask().msgBox()

      let template = ''
      if (msgBox.text()) msgBox.empty()
      let tasksContainer = (status === 'finished') ? $('.finished .tasks') : $('.notFinish .tasks')

      if (status === 'notFinish') {

        todoInput.val('')

        if (val) {
          notFinish.unshift(val)
        }

        if (notFinish.length > 0) {
          $.each( notFinish, function(index, val) {
            template += `
            <div class="task" data-index="${index}">
              <span class="task__checkbox"></span>
              <input type="text" value="${val}" class="task__content">
              <!--<input class="task__button task__edit" type="button" value="修改">-->
              <input type="button" class="task__button task__delete" value="刪除">
            </div>
            `
          })
        } else {
          template+='尚未新增待辦事項'
        }
      

        tasksContainer.html(template)
        this.updateTask()
        this.deleteTask('notFinish')
        this.setTask('notFinish')

      } else if (status === 'finished'){

        if (finished.length > 0) {
          $.each( finished, (index, val) => {
            template += `
            <div class="task" data-index="${index}">
              <span class="task__checkbox"></span>
              <span type="text" class="task__content">${val}</span>
              <input type="button" class="task__button task__delete" value="刪除">
            </div>
            `
          })
        } else {
          template+='尚未完成任何事項'
        }

        tasksContainer.html(template)
        this.deleteTask('finished')
        this.setTask('finished')
      }
      todoInput.focus()

    },
    updateTask: function () {
      let notFinish = this.tasks.notFinish
      let content = $('.notFinish .task__content')
      content.blur( function (index) {
        notFinish.splice(index, 1, this.value)
      })
    },
    deleteTask: function(status) {
      
      let deleteButtons = (status === 'finished') ? $('.finished .task__delete') : $('.notFinish .task__delete')

      if (deleteButtons.length > 0) {
        deleteButtons.click( function () {
          // 停止氣泡事件向上傳遞
          // 防止已完成項目中的刪除鈕吃到父層的事件
          if (event.stopPropogation) {
            event.stopPropogation()
          }else{
            event.cancelBubble = true
          }
          todo.removeTaskArray(status, this)
        })
      }
    },
    removeTaskArray: function (status, el) {
      let index = el.parentElement.dataset.index
      if(status==='finished') {
        todo.tasks.finished.splice([index], 1)
        todo.getCurrentTask('finished')
      } else if (status==='notFinish') {
        todo.tasks.notFinish.splice([index], 1)
        todo.getCurrentTask('notFinish')
      }
    },
    setTask: function (status) {
      let notFinish = this.tasks.notFinish
      let finished = this.tasks.finished
      let checkBoxes = (status === 'finished') ? $('.finished .task') : $('.notFinish .task__checkbox')

      checkBoxes.click( function (index) {
        if (status === 'finished') {
          let taskName = $(this).children('.task__content').text()
          finished.splice(index, 1)
          notFinish.unshift(taskName)
        } else if (status === 'notFinish') {
          let taskName = $(this).parent().children('.task__content').val()
          notFinish.splice(index, 1)
          finished.unshift(taskName)
        }
        todo.getCurrentTask('notFinish')
        todo.getCurrentTask('finished')
      })
    }
  }

  todo.listenCurrent()
})