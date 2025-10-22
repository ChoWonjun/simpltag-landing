import { Feature } from "@/types";

export const PREVIEW_FEATURES: Feature[] = [
  {
    id: 'chat-search',
    title: 'Chat 자연어 검색',
    image: '/screenshots/chat-search.png',
    alt: 'SimplTag Chat 기능으로 자연어로 검색하는 화면',
    description: '자연어로 검색하면 AI가 관련 링크를 찾아줍니다.',
  },
  {
    id: 'folder-page',
    title: '폴더 페이지',
    image: '/screenshots/folder-page.png',
    alt: 'SimplTag 폴더 기능으로 링크를 정리하는 화면',
    description: '링크를 폴더별로 정리하고 관리할 수 있습니다.',
  },
  {
    id: 'recent-page',
    title: 'Recent 페이지',
    image: '/screenshots/recent-page.png',
    alt: 'SimplTag Recent 페이지에서 최근 저장한 링크를 확인하는 화면',
    description: '최근에 저장한 링크들을 한눈에 확인할 수 있습니다.',
  },
];
