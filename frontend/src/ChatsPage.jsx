// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
	// const chatProps = useMultiChatLogic(
	// 	'4f3eff4f-bf25-4d45-84be-51667863b267',
	// 	props.user.username,
	// 	props.user.secret
	// )

	return (
		<div className='font-beauty' style={{ height: '100vh' }}>
			{/* <MultiChatSocket {...chatProps} />
			<MultiChatWindow {...chatProps} style={{ height: '100%' }} /> */}
			<PrettyChatWindow
				projectId="4f3eff4f-bf25-4d45-84be-51667863b267"
				username={props.user.username}
				secret={props.user.secret}
				style={{ height: '100vh' }}
			/>
		</div>
	)
}

export default ChatsPage