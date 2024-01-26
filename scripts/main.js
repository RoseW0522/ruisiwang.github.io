document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('showMBTIButton');
    var myImage = document.getElementById('myImage1');

    toggleButton.addEventListener('click', function () {
        if (myImage.style.display === 'none') {
            myImage.style.display = 'block';
        } else {
            myImage.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('showCcButton');
    var myImage = document.getElementById('myImage2');

    toggleButton.addEventListener('click', function () {
        if (myImage.style.display === 'none') {
            myImage.style.display = 'block';
        } else {
            myImage.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var commentInput = document.getElementById('commentInput');
    var submitButton = document.getElementById('submitComment');
    var commentsList = document.getElementById('commentsList');

    submitButton.addEventListener('click', function () {
        var commentText = commentInput.value.trim();

        if (commentText !== '') {
            addComment(commentText);
            commentInput.value = '';
        }
    });

    function addComment(text) {
        var commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = text;

        // Insert the new comment below the textarea
        commentsList.appendChild(commentDiv);
        commentsList.appendChild(commentInput);
    }
});

