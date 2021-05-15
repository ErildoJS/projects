import {Platform} from 'react-native'//SO
import styled from 'styled-components/native'
import Constants from 'expo-constants'
import colors from '../../styles/colors'

//altura da statusbar
const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight 
: 0 ;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  paddingTop: ${statusBarHeight + 'px'};

`;

export const Heading = styled.Text`
  color: ${colors.purple};
`;