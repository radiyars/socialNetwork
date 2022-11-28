import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';


function ProfileInfo(props) {
	if (!props.profile) {
		return <Preloader />
	} else {
		return (
			<div>
				{/* <div>
					<img src='https://cdn.ziarahmekkah.com/2021/12/bg-footer-ziarah-mekkah.png' className={style.img} />
				</div> */}
				<div className={style.descriptionContainer}>
					<img src={props.profile.photos.large} />
					<ProfileStatus status={'hi radiy! go go go!'} />
				</div>
			</div>
		)
	}
}

export default ProfileInfo;