json.array!(@games) do |game|
  json.extract! game, :id, :title, :date, :totalPlayers
  json.url game_url(game, format: :json)
end
