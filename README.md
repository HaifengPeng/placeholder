# placeholder
模拟输入框或文本框placeholder效果

##用法
* 在头部引入css文件
```html
<link rel="stylesheet" href="your path/placeholder.css" />
```

* 引入jquery库和placeholder js文件
```html
<script type="text/javascript" src="your path/jquery.js" ></script>
<script type="text/javascript" src="your path/calendar.js" ></script>
```
* html结构
```html
<form>
			<div class="placeholder-wrap">
				<label class="placeholder js-placeholder">Email</label>
				<input class="input" type="text" placeholder="Email" />
			</div>
			<div class="placeholder-wrap">
				<label class="placeholder js-placeholder">Password</label>
				<input class="input" type="password" placeholder="Password" />
			</div>
			<div class="placeholder-wrap">
				<label class="placeholder js-placeholder">Textarea</label>
				<textarea class="textarea" placeholder="Textarea"></textarea>
			</div>
		</form>
```
