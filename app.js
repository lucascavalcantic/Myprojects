// app.js — Miro Task Manager entry point

miro.onReady(() => {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({
      url: 'panel.html',
      width: 620,
    });
  });
});
