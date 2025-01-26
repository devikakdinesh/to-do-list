$(document).ready(function() {
    $('#addTask').click(function() {
        var taskText = $('#taskInput').val();
            var listItem = $('<li></li>').text(taskText);
            var deleteButton = $('<button>Delete</button>');
            
            deleteButton.click(function() {
                $(this).parent().remove();
            });
            if (taskText.trim() !== '') {
                listItem.append(deleteButton);
                $('#taskList').append(listItem);
                $('#taskInput').val('');
            }else{
                var listItem = $('<li></li>').text('. ');
                listItem.append(deleteButton);
                $('#taskList').append(listItem);
                $('#taskInput').val('');
            }
            
    });
    
    
});
