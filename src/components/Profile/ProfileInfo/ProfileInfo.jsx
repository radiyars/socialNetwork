import style from './ProfileInfo.module.css'


function ProfileInfo(props) {
	return (
		<div>
			<div>
				<img src='https://cdn.ziarahmekkah.com/2021/12/bg-footer-ziarah-mekkah.png' className={style.img} />
			</div>
			<div className={style.descriptionContainer}>
				avatar + description
			</div>
		</div>
	)
}

export default ProfileInfo;