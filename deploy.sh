# build & cleanup
yarn build
rm dist/**/*.{js,css}.map

# deploy
NOW_DOMAIN=$(now deploy dist --public)
echo "Now deployment success: $NOW_DOMAIN"

# make alias
now alias $NOW_DOMAIN ocap-vue-starter

