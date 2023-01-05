import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


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
					<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
				</div>
			</div>
		)
	}
}

export default ProfileInfo;