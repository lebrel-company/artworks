DEV=dev
APP="app"

tmux new-session -d -s $DEV
tmux rename-window -t $DEV:0 'terminal'
tmux send-keys "cd $APP" Enter

tmux new-window -t $DEV:1 -c $APP -n 'development'
tmux select-window -t $DEV:1

tmux attach -t $DEV
