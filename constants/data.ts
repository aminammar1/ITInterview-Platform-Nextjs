    import { Clock, Code2, Calendar, Users } from 'lucide-react'

    export const INTERVIEW_CATEGORY = [
    { id: 'upcoming', title: 'Upcoming Interviews', variant: 'outline' },
    { id: 'completed', title: 'Completed', variant: 'secondary' },
    { id: 'succeeded', title: 'Succeeded', variant: 'default' },
    { id: 'failed', title: 'Failed', variant: 'destructive' },
    ] as const

    export const TIME_SLOTS = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '19:58',
    '00:05',
    ]

    export const QUICK_ACTIONS = [
    {
        icon: Code2,
        title: 'New Call',
        description: 'Start an instant call',
        color: 'primary',
        gradient: 'from-primary/10 via-primary/5 to-transparent',
    },
    {
        icon: Users,
        title: 'Join Interview',
        description: 'Enter via invitation link',
        color: 'purple-500',
        gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
    },
    {
        icon: Calendar,
        title: 'Schedule',
        description: 'Plan upcoming interviews',
        color: 'blue-500',
        gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    },
    {
        icon: Clock,
        title: 'Recordings',
        description: 'Access past interviews',
        color: 'orange-500',
        gradient: 'from-orange-500/10 via-orange-500/5 to-transparent',
    },
    ]

    export const CODING_QUESTIONS: CodeQuestion[] = [
    {
        id: 'two-sum',
        title: 'Two Sum',
        description:
        'Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.',
        examples: [
        {
            input: 'nums = [2,7,11,15], target = 9',
            output: '[0,1]',
            explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1]',
        },
        {
            input: 'nums = [3,2,4], target = 6',
            output: '[1,2]',
        },
        ],
        starterCode: {
        javascript: `function twoSum(nums, target) {
        // Write your solution here
        
        }`,
        python: `def two_sum(nums, target):
            # Write your solution here
            pass`,
        java: `class Solution {
            public int[] twoSum(int[] nums, int target) {
                // Write your solution here
                
            }
        }`,
        dart: `List<int> twoSum(List<int> nums, int target) {
            // Write your solution here
            
        }`,
        go: `func twoSum(nums []int, target int) []int {
            // Write your solution here
            
        }`,
        cpp: `vector<int> twoSum(vector<int>& nums, int target) {
            // Write your solution here
            
        }`,
        c: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
            // Write your solution here
            *returnSize = 2;
            
        }`,
        },
        constraints: [
        '2 ≤ nums.length ≤ 104',
        '-109 ≤ nums[i] ≤ 109',
        '-109 ≤ target ≤ 109',
        'Only one valid answer exists.',
        ],
    },
    {
        id: 'reverse-string',
        title: 'Reverse String',
        description:
        'Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.',
        examples: [
        {
            input: 's = ["h","e","l","l","o"]',
            output: '["o","l","l","e","h"]',
        },
        {
            input: 's = ["H","a","n","n","a","h"]',
            output: '["h","a","n","n","a","H"]',
        },
        ],
        starterCode: {
        javascript: `function reverseString(s) {
        // Write your solution here
        
        }`,
        python: `def reverse_string(s):
            # Write your solution here
            pass`,
        java: `class Solution {
            public void reverseString(char[] s) {
                // Write your solution here
                
            }
        }`,
        dart: `void reverseString(List<String> s) {
            // Write your solution here
            
        }`,
        go: `func reverseString(s []byte) {
            // Write your solution here
            
        }`,
        cpp: `void reverseString(vector<char>& s) {
            // Write your solution here
            
        }`,
        c: `void reverseString(char* s, int sSize) {
            // Write your solution here
            
        }`,
        },
    },
    {
        id: 'palindrome-number',
        title: 'Palindrome Number',
        description:
        'Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.',
        examples: [
        {
            input: 'x = 121',
            output: 'true',
            explanation:
            '121 reads as 121 from left to right and from right to left.',
        },
        {
            input: 'x = -121',
            output: 'false',
            explanation:
            'From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.',
        },
        ],
        starterCode: {
        javascript: `function isPalindrome(x) {
        // Write your solution here
        
        }`,
        python: `def is_palindrome(x):
            # Write your solution here
            pass`,
        java: `class Solution {
            public boolean isPalindrome(int x) {
                // Write your solution here
                
            }
        }`,
        dart: `bool isPalindrome(int x) {
            // Write your solution here
            
        }`,
        go: `func isPalindrome(x int) bool {
            // Write your solution here
            
        }`,
        cpp: `bool isPalindrome(int x) {
            // Write your solution here
            
        }`,
        c: `bool isPalindrome(int x) {
            // Write your solution here
            
        }`,
        },
    },
    // New coding question for algorithm implementation
    {
        id: 'fibonacci-sequence',
        title: 'Fibonacci Sequence',
        description:
        'Write a function that returns the nth number in the Fibonacci sequence.\n\nThe Fibonacci sequence is defined as: F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.',
        examples: [
        {
            input: 'n = 2',
            output: '1',
            explanation: 'F(2) = F(1) + F(0) = 1 + 0 = 1',
        },
        {
            input: 'n = 3',
            output: '2',
            explanation: 'F(3) = F(2) + F(1) = 1 + 1 = 2',
        },
        {
            input: 'n = 4',
            output: '3',
            explanation: 'F(4) = F(3) + F(2) = 2 + 1 = 3',
        },
        ],
        starterCode: {
        javascript: `function fibonacci(n) {
        // Write your solution here
        
        }`,
        python: `def fibonacci(n):
            # Write your solution here
            pass`,
        java: `class Solution {
            public int fibonacci(int n) {
                // Write your solution here
                
            }
        }`,
        dart: `int fibonacci(int n) {
            // Write your solution here
            
        }`,
        go: `func fibonacci(n int) int {
            // Write your solution here
            
        }`,
        cpp: `int fibonacci(int n) {
            // Write your solution here
            
        }`,
        c: `int fibonacci(int n) {
            // Write your solution here
            
        }`,
        },
        constraints: ['0 ≤ n ≤ 30'],
    },
    ]

    export const LANGUAGES = [
    { id: 'javascript', name: 'JavaScript', icon: '/javascript.png' },
    { id: 'python', name: 'Python', icon: '/python.png' },
    { id: 'java', name: 'Java', icon: '/java.png' },
    { id: 'dart', name: 'Dart', icon: '/dart.png' },
    { id: 'go', name: 'Go', icon: '/go.png' },
    { id: 'cpp', name: 'C++', icon: '/cpp.png' },
    { id: 'c', name: 'C', icon: '/c.png' },
    ] as const

    export interface CodeQuestion {
    id: string
    title: string
    description: string
    examples: Array<{
        input: string
        output: string
        explanation?: string
    }>
    starterCode: {
        javascript: string
        python: string
        java: string
        dart?: string
        go?: string
        cpp?: string
        c?: string
    }
    constraints?: string[]
    }

    export type QuickActionType = (typeof QUICK_ACTIONS)[number]
