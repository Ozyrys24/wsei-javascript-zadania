document.addEventListener("DOMContentLoaded", function () {
    var taskList = document.getElementById("taskList");
    var taskInput = document.getElementById("taskInput");
    var addTaskButton = document.getElementById("addTaskButton");
    var removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");

    var counter = 0;
    var taskSorted = [[]];

    var span = document.createElement("span");
    span.textContent = "0";
    document.querySelector("body").insertBefore(span, taskList);

    var priority = document.createElement("input");
    priority.placeholder = 1;
    priority.type = "number";
    priority.min = 1;
    priority.max = 10;
    document.querySelector("body").insertBefore(priority, taskList);

    addTaskButton.addEventListener("click", function () {
        var li = document.createElement("li");
        var h1 = document.createElement("h1");
        var delButton = document.createElement("button");
        var completeButton = document.createElement("button");

        console.log(taskInput.value);
        h1.append(taskInput.value);
        delButton.textContent = "Delete";
        completeButton.textContent = "Complete";

        li.appendChild(h1);
        li.appendChild(delButton);
        li.appendChild(completeButton);

        completeButton.addEventListener("click", function () {
            var parent = this.parentElement;

            if (parent.className === "done") {
                parent.className = "";
                counter++;
                span.textContent = counter;
            }
            else {
                parent.className = "done";
                counter--;
                span.textContent = counter;
                parent.style.color = "red";
            }
        })
        delButton.addEventListener("click", function () {
            var parent = this.parentElement;
            taskList.removeChild(parent);
        })

        if (taskInput.value.length > 5 && taskInput.value.length < 100) {
            taskList.appendChild(li);
            taskInput.value = "";
            var taskArr = [li, priority.value];
            taskSorted.push(taskArr);
            console.log(taskSorted[0]);
            counter++;
            span.textContent = counter;

        }

    })

    removeFinishedTasksButton.addEventListener("click", function () {
        var elements = taskList.children;
        for (var i = elements.length - 1; i >= 0 ; i--) {
            if (elements[i].className === "done")
                taskList.removeChild(elements[i]);
        }
    })
})