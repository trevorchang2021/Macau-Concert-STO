// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ConcertSTO {
    // 1. 代幣基本資訊
    string public name = "Macau Concert STO"; // 代幣名稱
    string public symbol = "MCSTO";           // 代幣代號
    uint256 public totalSupply;               // 總發行量
    address public owner;                     // 合約管理者（也就是你）

    // 2. 核心帳本與白名單 (ERC-3643 的精髓)
    mapping(address => uint256) public balances;       // 記錄每個錢包有多少代幣
    mapping(address => bool) public isWhitelisted;     // 記錄錢包是否通過 KYC

    // 3. 記錄總共發放了多少票房分紅
    uint256 public totalRevenueDistributed;

    // 4. 部署合約時自動執行的設定
    constructor() {
        owner = msg.sender; // 把部署合約的人（你）設定為最高管理者
    }

    // 5. 權限防護罩：加上這個標籤的函數，只有你可以執行
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this!");
        _;
    }

    // ---------------- 以下為核心功能 ----------------

    // 功能 A：將投資人加入白名單 (模擬 KYC 審查通過)
    function addToWhitelist(address _investor) public onlyOwner {
        isWhitelisted[_investor] = true;
    }

    // 功能 B：發行代幣給投資人 (認購 STO)
    function mint(address _to, uint256 _amount) public onlyOwner {
        // 關鍵防護：如果投資人不在白名單內，交易會直接失敗！
        require(isWhitelisted[_to], "Investor is not in the KYC whitelist!");
        
        balances[_to] += _amount;
        totalSupply += _amount;
    }

    // 功能 C：投資人之間的轉帳功能
    function transfer(address _to, uint256 _amount) public {
        // 關鍵防護：雙方都必須在白名單內才能轉帳
        require(isWhitelisted[msg.sender], "Sender not whitelisted!");
        require(isWhitelisted[_to], "Receiver not whitelisted!");
        require(balances[msg.sender] >= _amount, "Insufficient balance!");

        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    // 功能 D：接收來自預言機（電機同學）的票房數據
    function distributeRevenue(uint256 _totalRevenue) public onlyOwner {
        // 在這裡記錄收到的總票房，區塊鏈會留下不可篡改的證據
        totalRevenueDistributed += _totalRevenue;
    }
}