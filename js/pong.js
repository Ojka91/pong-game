class Ball {
    constructor(width, height, id, color  = "#333") {
        this.width = width
        this.height = height
        this.id = id

        this.x = 50
        this.y = 50
        this.speed = 5
        this.x_speed = this.speed
        this.y_speed = this.speed

        this.board = document.getElementById("board")
        this.board.innerHTML = "<div class='ball' id='"+id+"'></div>"
        this.my_div =  document.getElementById(this.id)

        this.board_size_x = this.board.clientHeight
        this.board_size_y = this.board.clientWidth

    }
    move() {
        this.x += this.x_speed
        this.y += this.y_speed
        this.my_div.style.top = this.x+"px"
        this.my_div.style.left = this.y+"px"

        this.calc_board_size()

    	if (this.x >= this.board_size_x) this.x_speed = this.speed*-1
    	if (this.x <= -2) this.x_speed = this.speed
	    if (this.y >= this.board_size_y) this.y_speed = this.speed*-1
	    if (this.y <= -2 ) this.y_speed = this.speed
    }
    calc_board_size(){
        
        this.board_size_x = this.board.clientHeight - 25
        this.board_size_y = this.board.clientWidth - 25

    }

}

