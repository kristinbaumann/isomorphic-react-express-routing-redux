export default ({ appString, initialState }) => {
    return `<DOCTYPE html>
        <html>
        <head>
            <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        </head>
        <body>
            <div id='mount'>${appString}</div>
            <script src='assets/bundle.js'></script>
        </body>
        </html>
    `;
}