(function init (){

  let todo = {
    tasks: {
      notFinish: [],
      finished: []
    },
    createTask: function () {
      let task ={
        msgBox: () => {
          return document.querySelector('.msgBox')
        },
        input: () => {
          return document.querySelector('.addInput')
        },
        submit: function(){
          return document.querySelector('.task__submit')
        }
      }
      return task
    },
    listenCurrent: function () {
      let submitButton = this.createTask().submit()
      let todoInput = this.createTask().input()
      let msgBox = this.createTask().msgBox()

      submitButton.addEventListener('click', function () {
        let todoName = todoInput.value
        if (todoName) {
          todo.getCurrentTask('notFinish', todoName)
        } else {
          msgBox.textContent = '你沒輸入內容...!!!!'
        }
      })
    },
    getCurrentTask: function (status, val) {
      let notFinish = this.tasks.notFinish
      let finished = this.tasks.finished
      let todoInput = this.createTask().input()
      let msgBox = this.createTask().msgBox()

      let template = ''
      if (msgBox.textContent) msgBox.textContent = ''
      let tasksContainer = (status === 'finished') ? document.querySelector('.finished .tasks') : document.querySelector('.notFinish .tasks')

      if (status === 'notFinish') {

        todoInput.value = ''

        if (val) {
          notFinish.unshift(val)
        }

        if (notFinish.length > 0) {
          notFinish.forEach((val, index) => {
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
      

        tasksContainer.innerHTML = template
        this.updateTask()
        this.deleteTask('notFinish')
        this.setTask('notFinish')

      } else if (status === 'finished'){

        if (finished.length > 0) {
          finished.forEach((val, index) => {
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

        tasksContainer.innerHTML = template
        this.deleteTask('finished')
        this.setTask('finished')
      }
      todoInput.focus()
      

    },
    updateTask: function () {
      let notFinish = this.tasks.notFinish
      let content = document.querySelectorAll('.notFinish .task__content')
      content.forEach((input, index) => {
        input.addEventListener('blur', function () {
          notFinish.splice(index, 1, this.value)
        })
      })
    },
    deleteTask: function(status) {
      let deleteButtons = (status === 'finished') ? document.querySelectorAll('.finished .task__delete') : document.querySelectorAll('.notFinish .task__delete')

      if (deleteButtons.length > 0) {
        deleteButtons.forEach((button) => {
          button.addEventListener('click', function () {
            // 停止氣泡事件向上傳遞
            // 防止已完成項目中的刪除鈕吃到父層的事件
            if (event.stopPropogation) {
              event.stopPropogation()
            }else{
              event.cancelBubble = true
            }
            todo.removeTaskArray(status, this)
          })
        })
      }
    },
    
    removeTaskArray: function (status, el) {
      el.removeEventListener('click', this, false)
      el.parentElement.children[0].removeEventListener('click', this, false)
      el.parentElement.children[1].removeEventListener('blur', this, false)
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
      let checkBoxes = (status === 'finished') ? document.querySelectorAll('.finished .task') : document.querySelectorAll('.notFinish .task__checkbox')

      checkBoxes.forEach((checkbox, index) => {
        checkbox.addEventListener('click', function () {
          if (status === 'finished') {
            let taskName = this.children[1].textContent
            finished.splice(index, 1)
            notFinish.unshift(taskName)
          } else if (status === 'notFinish') {
            let taskName = this.parentElement.children[1].value
            notFinish.splice(index, 1)
            finished.unshift(taskName)
          }
          todo.getCurrentTask('notFinish')
          todo.getCurrentTask('finished')
        })
      })
    }
  }

  todo.listenCurrent()
})()
