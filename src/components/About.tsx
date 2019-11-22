import * as React from 'react'

import s from './about.less'

function About(): React.ReactElement {
	return (
		<section className={s.about}>
			<div className={s.quote}>The best way to predict the future is to invent it <span className={s.author}>// Alan Kay</span></div>
			<p className={s.text}>
				<span className={s.block}>Hi! A little about me... I'm a <span className={s.bold}>college student</span>, <span className={s.bold}>developer</span>, and <span className={s.bold}>entrepreneur</span>.</span>
				<span className={s.block}>I grew up in Longmont, Colorado. Now I attend Northwestern University in Evanston, Illinois, and study Computer Science and engineering. I've been writing code and working with robots for a while now and I love it. I've worked for a couple tech startups where I've developed several applications from the ground up. With company growth, I've spent significant time integrating new developers, which has sparked my interest in mentoring. I mentor a competetive high school robotics team and lead a tech-focused student group.</span>
				<span className={s.block}>When I get the chance, I snowboard, play hockey, cruise around on my electric skateboard, or drive about soaking in Colorado's beauty. I also enjoy philosophy and theorizing about the impact of technological development on society. I do some photography but will never stack up against the incredible videography of my younger brother. I wish I read books but instead I just read documentation and articles concerning new development technologies.</span>
			</p>
		</section>
	)
}

export default About
