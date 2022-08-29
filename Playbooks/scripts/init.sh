DEV=dev
APP="app"

tmux new-session -d -s $DEV
tmux rename-window -t $DEV:0 'root'

tmux new-window -t $DEV:1 -c $APP -n 'dev'
tmux select-window -t $DEV:1
tmux split-window -h -c $APP
tmux split-window -h -c $APP

# ---------------

CONS=term
tmux new-session -d -s $CONS
tmux rename-window -t $CONS:0 'root'

tmux new-window -t $CONS:1 -c $APP -n 'console'
tmux select-window -t $CONS:1
tmux split-window -h -c $APP
tmux split-window -h -c $APP
tmux split-window -h -c $APP
tmux select-layout tiled

# ---------------

tmux select-window -t $DEV:1
tmux attach -t $DEV
