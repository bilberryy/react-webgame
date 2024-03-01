# 청양고추 vibe

# 변경사항이 생길 때마다 빌드하는 거 귀찮아요 이럴 땐 webpack-dev-serve

# npm install --save-dev webpack-dev-server

# Webpack-dev-server v4부터 HMR이 기본적으로 활성화되어 있습니다

# 그냥 dev server만 깔아도 새로고침 되는데?

# ㄴㄴ, 전체가 새로고침 되기 때문에 모든 데이터 날아감

# refresh깔면 바뀐 부분만 변경됨

# npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh

# peerOptional webpack-dev-server@"3.x || 4.x" from @pmmmwh/react-refresh-webpack-plugin@0.5.11

# npm i -D webpack-dev-server@4.15.1

# 겁 먹지 말고 에러 메세지를 차근차근 읽어봐요~~~~

# html-webpack-plugin, script 태그를 사용하여 body에 모든 webpack 번들을 포함하는 HTML5 파일을 output.path에 자동으로 생성하게 해준다

# plugins: new HtmlWebpackPlugin({ template: './index.html' })

# 이렇게 설정하면 ./index.html파일을 참고해서 새로운html파일을 생성
