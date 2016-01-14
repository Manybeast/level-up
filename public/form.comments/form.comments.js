/**
 * Created by IlyaLitvinov on 12.12.15.
 */

function CommentForm (parent) {
    var _parent = document.querySelector(parent),
        content = _parent.querySelector('.content'),
        comments = [
            {
                text: 'test',
                author: 'Author',
                date: '13/01/2016'
            },
            {
                text: 'test',
                author: 'Author',
                date: '13/01/2016'
            }
        ];

    function renderOne (commentObject) {
        var container = document.createElement('li'),
            template  = '<div class="comment"><div class="comment-text">'
                + commentObject.text
                +'</div><div class="author"><div class="name">'
                + commentObject.name
                + '</div> <div class="date">'
                + commentObject.date +'</div></div></div>';

        container.innerHTML = template;
        content.appendChild(container);
    }

    renderOne(comments[0]);

};