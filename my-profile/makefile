image=my-profile-my-profile

run:
	@docker compose up -d --build
	@clear
	@echo "\e[1;32m Euphyllia bot's running \e[0m"

down:
	@docker compose down
	@docker rmi -f $(image)
	@clear
	@echo "\e[1;31m Euphyllia bot's stop now \e[0m"