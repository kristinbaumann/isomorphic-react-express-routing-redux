export default ({ body, initialState }) => {
    return `<DOCTYPE html>
        <html>
        <head>
            <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        </head>
        <body>
            <div id='root'>${body}</div>
            <script src='assets/bundle.js'></script>
        </body>
    `;
}